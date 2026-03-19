import { dataMap } from './courseData';

export const courseCodes = [ 'nt', 'dm', 'pg', 'gd', 'tb', 'yk', 'tr', 'gr', 'pu' ] as const;

export type CourseCode = typeof courseCodes[number];

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

export const getCourseName = (c: CourseCode): string => {
  return dataMap[c].name;
};

export const getCourseUrl = (c: CourseCode): string => {
  return dataMap[c].url;
};

export const getCourseDescription = (c: CourseCode): string => {
  return dataMap[c].description;
};

export const getCourseSubjects = (c: CourseCode): readonly string[] | undefined => {
  return dataMap[c].subjects;
};

export const getCourseWorkload = (c: CourseCode): string | undefined => {
  return dataMap[c].workload;
};

export const getEnrollmentUrl = (c: CourseCode): string => {
  return dataMap[c].enrollmentUrl;
};
