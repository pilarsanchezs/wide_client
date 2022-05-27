import {Task} from '~/business-logic/model/tasks/task';
import {
  RESET_EXPERIMENT_METRICS,
  SET_EXPERIMENT_HISTOGRAM,
  SET_EXPERIMENT_METRICS_SEARCH_TERM,
  SET_EXPERIMENT_PLOTS,
  SET_SELECTED_EXPERIMENTS,
  setAxisCache,
  UPDATE_EXPERIMENT_SETTINGS
} from '../actions/experiments-compare-charts.actions';
import {ScalarKeyEnum} from '~/business-logic/model/events/scalarKeyEnum';
import {ExperimentSettings} from '../../experiments/reducers/common-experiment-output.reducer';
import {IMultiplot} from '@common/tasks/tasks.utils';

export type MetricValueType = 'min_value' | 'max_value' | 'value';

export interface SelectedMetric {
  name: string;
  path: string;
}

export interface GroupedHyperParams {
  [section: string]: HyperParams;
}

export interface HyperParams {
  [name: string]: boolean;
}

export interface VariantOption {
  name: string;
  value: SelectedMetric;
}

export interface MetricOption {
  metricName: string;
  variants: VariantOption[];
}

export interface IExperimentCompareChartsState {
  metricsMultiScalarsCharts: any;
  metricsHistogramCharts: any;
  cachedAxisType: ScalarKeyEnum;
  metricsPlotsCharts: IMultiplot;
  settingsList: Array<ExperimentCompareSettings>;
  searchTerm: string;
  showSettingsBar: boolean;
  selectedExperiments: Array<string>;
}

export interface ExperimentCompareSettings extends Omit<ExperimentSettings, 'id' | 'selectedMetric'> {
  id: Array<Task['id']>;
  selectedMetric: SelectedMetric;
}

export const initialState: IExperimentCompareChartsState = {
  metricsMultiScalarsCharts: null,
  metricsHistogramCharts: null,
  cachedAxisType: null,
  metricsPlotsCharts: null,
  settingsList: [],  // TODO, Make this an object with ID's as key YK
  searchTerm: '',
  showSettingsBar: false,
  selectedExperiments: [], // TODO: Move this to the general compare reducer
};

export function experimentsCompareChartsReducer(state: IExperimentCompareChartsState = initialState, action): IExperimentCompareChartsState {
  switch (action.type) {
    case SET_SELECTED_EXPERIMENTS:
      return {...state, selectedExperiments: action.payload.selectedExperiments};
    case SET_EXPERIMENT_METRICS_SEARCH_TERM:
      return {...state, searchTerm: action.payload.searchTerm};
    case SET_EXPERIMENT_HISTOGRAM:
      return {...state, metricsHistogramCharts: action.payload, cachedAxisType: action.axisType};
    case setAxisCache.type:
      return {...state, cachedAxisType: (action as ReturnType<typeof setAxisCache>).axis};
    case SET_EXPERIMENT_PLOTS:
      return {...state, metricsPlotsCharts: action.payload};
    case UPDATE_EXPERIMENT_SETTINGS: {
      let newSettings: ExperimentCompareSettings[];
      const changes = {...action.payload.changes, lastModified: (new Date()).getTime()} as ExperimentCompareSettings;
      const ids = action.payload.id.join();
      const experimentExists = state.settingsList.find((setting) => setting.id.join() === ids);
      const discardBefore = new Date()
      discardBefore.setMonth(discardBefore.getMonth() - 6);
      if (experimentExists) {
        newSettings = state.settingsList
          .filter(setting => discardBefore < new Date(setting.lastModified || 1648771200000))
          .map(setting => setting.id.join() === ids ? {...setting, ...changes} : setting);
      } else {
        newSettings = [
          ...state.settingsList.filter(setting => discardBefore < new Date(setting.lastModified || 1648771200000)),
          {id: action.payload.id, ...changes}
        ];
      }
      return {...state, settingsList: newSettings};
    }
    case RESET_EXPERIMENT_METRICS:
      return {
        ...state,
        metricsMultiScalarsCharts: initialState.metricsMultiScalarsCharts,
        metricsHistogramCharts: initialState.metricsHistogramCharts,
        metricsPlotsCharts: initialState.metricsPlotsCharts,
        cachedAxisType: initialState.cachedAxisType
      };
    default:
      return state;
  }
}
