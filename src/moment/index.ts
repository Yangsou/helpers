import moment, { unitOfTime } from 'moment';

export function convertToUTCByStartEnd(time: string, format = 'YYYY-MM-DD HH:mm:ss', type: 'startOf' | 'endOf', startOfType: unitOfTime.StartOf) {
  if (!time) {
    return '';
  }
  
  return moment(time)[type](startOfType).utc().format(format);
}
/**
 * @func convert time to UTC with format full date time
 * @note when parse with func @formatDateFullTime need to use locale = false
 * @param time
 * @param format, default = YYYY-MM-DD HH:mm:ss
 */
 export function convertToUTCWithFormat(time: string, format = 'YYYY-MM-DD HH:mm:ss') {
  return Boolean(time) ?? moment(time).utc().format(format);
}