import useGlobalStore from "../../../../stores/globalStore";
import {
  guidedSkipPageSet,
  guidedUnSkipPageSet,
} from "../../../guided-mode/pages/navigationUtils/pageSkipping";
import {
  isCheckboxCardChecked,
  setCheckboxCardUnchecked,
} from "../../../../stores/slices/checkboxCardSlice";
import { getSodaTextInputValue } from "../../../../stores/slices/sodaTextInputSlice";
import { swalConfirmAction } from "../../../utils/swal-utils";
import { guidedGetCurrentUserWorkSpace } from "../../../guided-mode/workspaces/workspaces";
export const savePageGenerateDataset = async (pageBeingLeftID, movingForward) => {
  const errorArray = [];
  
  // UnSkip this page set class for now; removing it breaks the app
  const localGenerationPageSetClass = "local-generation-page-set";
  guidedUnSkipPageSet(localGenerationPageSetClass);

  if (pageBeingLeftID === "guided-pennsieve-settings-tab") {
    // Handle saving the Pennsieve dataset name
    const pennsieveDatasetName = getSodaTextInputValue("pennsieve-dataset-name");
    if (!pennsieveDatasetName) {
      errorArray.push({
        type: "notyf",
        message: "Please enter a dataset name for Pennsieve.",
      });
      throw errorArray;
    }
    const pennsieveDatasetNameContainsForbiddenCharacters =
      window.evaluateStringAgainstSdsRequirements(
        pennsieveDatasetName,
        "string-contains-forbidden-pennsieve-dataset-name-characters"
      );
    if (pennsieveDatasetNameContainsForbiddenCharacters) {
      errorArray.push({
        type: "notyf",
        message:
          'Pennsieve dataset names cannot contain any of the following characters: / ? % * : | " < > .',
      });
      throw errorArray;
    }

    if (
      "dataset-name" in window.sodaJSONObj["generate-dataset"] &&
      "upload-progress" in window.sodaJSONObj &&
      window.sodaJSONObj["generate-dataset"]["dataset-name"] &&
      window.sodaJSONObj["generate-dataset"]["dataset-name"] !== pennsieveDatasetName
    ) {
      let result = await swalConfirmAction(
        "info",
        "Dataset Name will be Changed and Upload Progress Lost",
        `<div style="text-align: left;"> 
          Changing your dataset name from ${window.sodaJSONObj["generate-dataset"]["dataset-name"]} to ${pennsieveDatasetName} will result in losing your progress in your current upload. 
          If you want to change your dataset's name it is recommended you do so after finishing your upload.
        </div>`,
        "Change Dataset Name and Continue",
        "Cancel"
      );

      if (!result) {
        errorArray.push({
          type: "notyf",
          message: "Revert dataset name before continuing.",
        });
        throw errorArray;
      }

      delete window.sodaJSONObj["upload-progress"];
    }
    window.sodaJSONObj["generate-dataset"]["dataset-name"] = pennsieveDatasetName;

    // Handle saving the Pennsieve dataset subtitle
    const pennsieveDatasetSubtitle = getSodaTextInputValue("pennsieve-dataset-subtitle");
    if (!pennsieveDatasetSubtitle) {
      errorArray.push({
        type: "notyf",
        message: "Please enter a dataset subtitle for Pennsieve.",
      });
      throw errorArray;
    }
    window.sodaJSONObj["pennsieve-dataset-subtitle"] = pennsieveDatasetSubtitle;
  }

  if (pageBeingLeftID === "guided-dataset-generation-tab") {
    if (window.sodaJSONObj["curation-mode"] === "free-form") {
      const datasetSaveFilePath = window.sodaJSONObj["save-file-path"];

      if (datasetSaveFilePath && window.fs.existsSync(datasetSaveFilePath)) {
        try {
          window.fs.unlinkSync(datasetSaveFilePath);
          console.info(`Deleted free-form progress file: ${datasetSaveFilePath}`);
        } catch (error) {
          window.log?.error?.(
            `Failed to delete free-form progress file ${datasetSaveFilePath}: ${JSON.stringify(
              error
            )}`
          );
        }
      }
    }
  }
};
