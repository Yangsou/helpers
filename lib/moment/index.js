"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToUTCWithFormat = exports.convertToUTCByStartEnd = void 0;
const moment_1 = __importDefault(require("moment"));
function convertToUTCByStartEnd(time, format = 'YYYY-MM-DD HH:mm:ss', type, startOfType) {
    if (!time) {
        return '';
    }
    return (0, moment_1.default)(time)[type](startOfType).utc().format(format);
}
exports.convertToUTCByStartEnd = convertToUTCByStartEnd;
/**
 * @func convert time to UTC with format full date time
 * @note when parse with func @formatDateFullTime need to use locale = false
 * @param time
 * @param format, default = YYYY-MM-DD HH:mm:ss
 */
function convertToUTCWithFormat(time, format = 'YYYY-MM-DD HH:mm:ss') {
    var _a;
    return (_a = Boolean(time)) !== null && _a !== void 0 ? _a : (0, moment_1.default)(time).utc().format(format);
}
exports.convertToUTCWithFormat = convertToUTCWithFormat;
