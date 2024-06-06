export interface IUser {
    email: string
    role: string
}

export interface IUserRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserLoginResponse {
    accessToken: string
}

export interface IUserProfile {
    firstName: string,
    lastName: string,
    email: string,
    grade: number,
    role: string,
    teacherFirstName: string | null,
    teacherLastName: string | null,
    teacherEmail: string | null
}

export interface ISection {
    id: string;
    percentage: number | null;
    title: string;
    tests: any[]
}

export interface IStudentTest {
    id: number;
    percentage: number | null;
    title: string;
}

export interface IClass {
    id: string,
    grade: number,
    percentage: number | null;
    sections: ISection[]
}

export interface ISectionAdd {
    grade: number;
    title: string;
}

export interface ITestAdd {
    sectionId: string;
    title: string;
    tests: any[]
}

export interface IMyCourses {
    id: string;
    title: string;
    percentage: number | null;
}

export interface IQuestion {
    id: string;
    question: string;
    answers: string[]
}

export interface ITest {
    id: string,
    grade: number,
    title: string,
    sectionTitle: string,
    questions: IQuestion[]
}

export interface ITestSubmitQuestion {
    question: string;
    answer: string;
}

export interface ITestSubmit {
    testId: string,
    questions: ITestSubmitQuestion[];
}

export interface IStudent {
    studentId: string,
    firstName: string,
    lastName: string,
    totalGrade: number,
    classesGrades: IClassesGrade[]
}

export interface IClassesGrade {
    grade: number;
    classGrade: number;
    themesGrades: IThemesGrades[]
}

export interface IThemesGrades {
    themeId: string;
    themeTitle: string;
    themeGrade: number
}