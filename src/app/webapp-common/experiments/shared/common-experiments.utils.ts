import {DIGITS_AFTER_DECIMAL, EXPERIMENTS_TABLE_COL_FIELDS} from '../../../features/experiments/shared/experiments.const';

export const convertStopToComplete = (tasks) => tasks.map(task => {
  if (task.status === 'closed') {
    task.status = 'completed';
  }
  return task;
});

export const filterArchivedExperiments = (experiments, showArchived) => {
  if (showArchived) {
    return experiments.filter(ex => ex?.system_tags?.includes('archived'));
  } else {
    return experiments.filter(ex => !(ex?.system_tags?.includes('archived')));
  }
};

export const getRoundedNumber = (value: number) => Math.round(value * Math.pow(10, DIGITS_AFTER_DECIMAL)) / Math.pow(10, DIGITS_AFTER_DECIMAL);

export const convertDurationFilter = (filter: string[]): string | string[] => {
  let newFilter;
  if (filter[0]) {
    newFilter = `>=${filter[0]}`;
  }
  if (filter[1]) {
    newFilter = newFilter ? [newFilter, `<=${filter[1]}`] : `<=${filter[1]}`;
  }
  return newFilter;
};
