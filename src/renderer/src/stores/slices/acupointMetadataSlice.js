import useGlobalStore from "../globalStore";

// Update acupoint_metadata_id - strip prefix if present
export const setAcupointMetadataId = (value) => {
  useGlobalStore.setState(
    produce((state) => {
      // Remove "asm-" prefix if user enters it
      if (value.startsWith("asm-")) {
        state.acupoint_metadata_id = value.substring(4);
      } else {
        state.acupoint_metadata_id = value;
      }
    })
  );
}

export const setStyleOfAcupuncture = (value) => {
    useGlobalStore.setState({
        styleOfAcupuncture: value,
    });
};

export const setReasoningForTreatment = (value) => {
    useGlobalStore.setState({
        reasoningForTreatment: value,
    });
};

export const setExtentTreatmentVaried = (value) => {
    useGlobalStore.setState({
        extentTreatmentVaried: value,
    });
};

export const setNumNeedleInsertions = (value) => {
    useGlobalStore.setState({
        numNeedleInsertions: value,
    });
};

export const setPointsUsed = (value) => {
    useGlobalStore.setState({
        pointsUsed: value,
    });
};

export const setDepthOfInsertion = (value) => {
    useGlobalStore.setState({
        depthOfInsertion: value,
    });
};

export const setResponsesSought = (value) => {
    useGlobalStore.setState({
        responsesSought: value,
    })
};

export const setNeedleStimulation = (value) => {
    useGlobalStore.setState({
        needleStimulation: value,
    })
};

export const setNeedleRetentionTime = (value) => {
    useGlobalStore.setState({
        needleRetentionTime: value,
    })
};

export const setNeedleDiameter = (value) => {
    useGlobalStore.setState({
        needleDiameter: value,
    })
};

export const setNeedleLength = (value) => {
    useGlobalStore.setState({
        needleLength: value,
    })
};

export const setNeedleManuMaterial = (value) => {
    useGlobalStore.setState({
        needleManuMaterial: value,
    })
};

export const setNumTreatmentSessions = (value) => {
    useGlobalStore.setState({
        numTreatmentSessions: value,
    })
};

export const setFreqTreatmentSessions = (value) => {
    useGlobalStore.setState({
        freqTreatmentSessions: value,
    })
};

export const setOtherInterventionDetails = (value) => {
    useGlobalStore.setState({
        setOtherInterventionDetails: value,
    })
};

export const setTreatmentSetting = (value) => {
    useGlobalStore.setState({
        treatmentSetting: value,
    })
};
