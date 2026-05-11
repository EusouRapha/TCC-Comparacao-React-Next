let cycleStep = 0;

type CycleMetadata = Record<string, string | number | boolean | undefined>;

export function logExecutionPhase(phase: string, metadata?: CycleMetadata) {
  cycleStep += 1;

  console.log("[Ciclo de Execucao][React]", {
    etapa: cycleStep,
    fase: phase,
    ...metadata,
  });
}
