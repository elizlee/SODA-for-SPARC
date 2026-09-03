import { useState } from "react";
import GuidedModePage from "../../containers/GuidedModePage";
import GuidedModeSection from "../../containers/GuidedModeSection";
import {
  IconPlus,
  IconTrash,
  IconClipboard,
  IconDeviceFloppy,
  IconX,
  IconEdit,
} from "@tabler/icons-react";
import {
  TextInput,
  Text,
  Stack,
  Group,
  Button,
  Box,
  ActionIcon,
  Paper,
  Grid,
  Title,
  ScrollArea,
  Divider,
  Flex,
  NumberInput,
} from "@mantine/core";
import useGlobalStore from "../../../stores/globalStore";
import { DateTimePicker } from "@mantine/dates";

import {
  setAcupointMetadataId,
  setStyleOfAcupuncture,
  setReasoningForTreatment,
  setExtentTreatmentVaried,
  setNumNeedleInsertions,
  setPointsUsed,
  setDepthOfInsertion,
  setResponsesSought,
  setNeedleStimulation,
  setNeedleRetentionTime,
  setNeedleDiameter,
  setNeedleLength,
  setNeedleManuMaterial,
  setNumTreatmentSessions,
  setFreqTreatmentSessions,
  setOtherInterventionDetails,
  setTreatmentSetting,
} from "../../../stores/slices/acupointMetadataSlice";
import InstructionsTowardsLeftContainer from "../../utils/ui/InstructionsTowardsLeftContainer";

// Acupoint stimulation metadata form component with store-based state
const AcupointStimulationMetadataForm = () => {
  // Get form values from the global store
  const styleOfAcupuncture = useGlobalStore((state) => state.styleOfAcupuncture);
  const reasoningForTreatment = useGlobalStore(
    (state) => state.reasoningForTreatment
  );
  const extentTreatmentVaried = useGlobalStore(
    (state) => state.extentTreatmentVaried
  );
  const numNeedleInsertions = useGlobalStore((state) => state.numNeedleInsertions);
  const pointsUsed = useGlobalStore((state) => state.pointsUsed);
  const depthOfInsertion = useGlobalStore((state) => state.depthOfInsertion);
  const responsesSought = useGlobalStore((state) => state.responsesSought);
  const needleStimulation = useGlobalStore((state) => state.needleStimulation);
  const needleRetentionTime = useGlobalStore((state) => state.needleRetentionTime);
  const needleDiameter = useGlobalStore((state) => state.needleDiameter);
  const needleLength = useGlobalStore((state) => state.needleLength);
  const needleManuMaterial = useGlobalStore((state) => state.needleManuMaterial);
  const numTreatmentSessions = useGlobalStore((state) => state.numTreatmentSessions);
  const freqTreatmentSessions = useGlobalStore(
    (state) => state.freqTreatmentSessions
  );
  const otherInterventionDetails = useGlobalStore(
    (state) => state.otherInterventionDetails
  );
  const treatmentSetting = useGlobalStore((state) => state.treatmentSetting);
//  const asm_id = useGlobalStore((state) => state.asm_id);

  return (
    <GuidedModePage pageHeader="Acupoint Stimulation Metadata">
      <GuidedModeSection>
        <Text>
          Provide details about the acupoint stimulation associated with this
          dataset in the interface below.
        </Text>
      </GuidedModeSection>
      <GuidedModeSection withBorder>
        <text>Acupuncture Rationale</text>
        <TextInput>
          label="Style of acupuncture"
          placeholder="Enter the style of acupuncture used in the study"
          description="e.g., Traditional Chinese Medicine, Japnese, Korean, Western medical, Five Element, ear acupuncture, etc."
          value={styleOfAcupuncture}
          onChange={(event) => setStyleOfAcupuncture(event.target.value)}
          required
        </TextInput>
        <TextInput>
          label="Reasoning for treatment provided"
          placeholder="Enter the reasoning for treatment provided"
          description="Please enter the reasoning for treatment provided based on historical context, literature sources and/or consensus methods, with references where appropriate"
          value={reasoningForTreatment}
          onChange={(event) => setReasoningForTreatment(event.target.value)}
        </TextInput>
        <Textarea>
          label="Extent to which treatment was varied"
          placeholder="Describe the extent to which treatment was varied"
          description="Enter the extent to which treatment was varied"
          autosize
          minRows={3}
          value={extentTreatmentVaried}
          onChange={(event) => setExtentTreatmentVaried(event.target.value)}
        </Textarea>
      </GuidedModeSection>

      <GuidedModeSection withBorder>
        <Text>Details of Needling</Text>
        <Textarea>
          label="Number of needle insertions per subject per session"
          placeholder="Enter the number of needle insertions"
          description="Please enter the number of needle insertions per subject per session (mean and rage where relevant)"
          value={numNeedleInsertions}
          onChange={(event) => setNumNeedleInsertions(event.target.value)}
          required
        </Textarea>
        <Textarea>
          label="Names of points used"
          placeholder="Enter the names/locations of points used"
          description="Names (or location if no standard name) of points used (uni-/bilateral)"
          minRows={3}
          value={pointsUsed}
          onChange={(event) => setPointsUsed(event.target.value)}
          required
        </Textarea>
        <TextInput>
          label="Depth of insertion"
          placeholder="Enter the depth of insertion"
          description="Depth of insertion, based on a specified unit of measurement or on a particular tissue level"
          value={depthOfInsertion}
          onChange={(event) => setDepthOfInsertion(event.target.value)}
        </TextInput>
        <Textarea>
          label="Responses sought"
          placeholder="Enter the responses sought"
          description="e.g., de qi or muscle twitch response"
          value={responsesSought}
          onChange={(event) => setResponsesSought(event.target.value)}
        </Textarea>
        <TextInput>
          label="Needle stimulation"
          placeholder="Enter the needle stimulation"
          description="e.g., manual or electrical"
          value={needleStimulation}
          onChange={(event) => setNeedleStimulation(event.target.value)}
          required
        </TextInput>
        <TextInput>
          label="Needle retention time"
          placeholder="Enter the needle retention time"
          description="Please enter the needle retention time"
          value={needleRetentionTime}
          onChange={(event) => setNeedleRetentionTime(event.target.value)}
        </TextInput>
        <Text>Needle type</Text>
        <TextInput>
          label="Diameter"
          placeholder="Enter the needle diameter"
          description="Please enter the diameter of the needle"
          value={needleDiameter}
          onChange={(event) => setNeedleDiameter(event.target.value)}
          required
        </TextInput>
        <TextInput>
          label="Length"
          placeholder="Enter the needle length"
          description="Please enter the length of the needle"
          value={needleLength}
          onChange={(event) => setNeedleLength(event.target.value)}
          required
        </TextInput>
        <TextInput>
          label="Manufacturer or material"
          placeholder="Enter the manufacturer or material"
          description="Please enter the manufacturer or material of the needle"
          value={needleManuMaterial}
          onChange={(event) => setNeedleManuMaterial(event.target.value)}
          required
        </TextInput>
      </GuidedModeSection>

      <GuidedModeSection withBorder>
        <text>Treatment Regimen</text>
        <NumberInput>
          label="Number of treatment sessions"
          description="Please enter the number of treatment sessions"
          value={numTreatmentSessions}
          onChange={(event) => setNumTreatmentSessions(event.target.value)}
          required
        </NumberInput>
        <TextInput>
          label="Frequency and duration of treatment sessions"
          placeholder="Enter the frequency and duration of the treatment sessions"
          description="Please enter the frequency and duration of the treatment sessions"
          value={freqTreatmentSessions}
          onChange={(event) => setFreqTreatmentSessions(event.target.value)}
          required
        </TextInput>
      </GuidedModeSection>

      <GuidedModeSection withBorder>
        <text>Other Components of Treatment</text>
        <textarea>
          label="Details of other interventions"
          placeholder="Enter the details of other interventions"
          description="Please enter the details of other interventions administered to the acupuncture group"
          minRows={3}
          value={otherInterventionDetails}
          onChange={(event) => setOtherInterventionDetails(event.target.value)}
          required
        </textarea>
        <textarea>
          label="Setting and context of treatment"
          placeholder="Enter the setting and context of treatment"
          description="Please enter the setting and context of treatment, including instructions to practitioners, and information and explanations to patients"
          minRows={3}
          value={treatmentSetting}
          onChange={(event) => setTreatmentSetting(event.target.value)}
        </textarea>
      </GuidedModeSection>
    </GuidedModePage>
  );
};

export default AcupointStimulationMetadataForm;
