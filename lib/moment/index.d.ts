import { unitOfTime } from 'moment';
export declare function convertToUTCByStartEnd(time: string, format: string | undefined, type: 'startOf' | 'endOf', startOfType: unitOfTime.StartOf): string;
/**
 * @func convert time to UTC with format full date time
 * @note when parse with func @formatDateFullTime need to use locale = false
 * @param time
 * @param format, default = YYYY-MM-DD HH:mm:ss
 */
export declare function convertToUTCWithFormat(time: string, format?: string): boolean;
