import { IStudent, ITeacher } from "./types/types.interface"

export const users = [
    {
      "firstName": "dvsv",
      "lastName": "dsvdv",
      "grade": 7,
      "role": 'teacher'
    },
  ]

  export const classesData = [
    {
      "id": 0,
      "grade": 6,
      "sections": [
        {
          "id": 1,
          "title": "Подільність чисел",
          "tests": [
            {
              "id": 1,
              "title": "test1"
            },
            {
              "id": 2,
              "title": "test2"
            },
            {
              "id": 3,
              "title": "test3"
            },
            {
              "id": 4,
              "title": "test4"
            }
          ]
        },
        {
          "id": 2,
          "title": "Звичайні дроби та дії з ними",
          "tests": [
            {
              "id": 5,
              "title": "test1"
            },
            {
              "id": 6,
              "title": "test2"
            },
            {
              "id": 7,
              "title": "test3"
            },
            {
              "id": 8,
              "title": "test4"
            }
          ]
        },
        {
          "id": 3,
          "title": "Відношення та пропорції",
          "tests": [
            {
              "id": 9,
              "title": "test1"
            },
            {
              "id": 10,
              "title": "test2"
            },
            {
              "id": 11,
              "title": "test3"
            },
            {
              "id": 12,
              "title": "test4"
            }
          ]
        },
        {
          "id": 4,
          "title": "Раціональні числа та дії з ними",
          "tests": [
            {
              "id": 13,
              "title": "test1"
            },
            {
              "id": 14,
              "title": "test2"
            },
            {
              "id": 15,
              "title": "test3"
            },
            {
              "id": 16,
              "title": "test4"
            }
          ]
        },
        {
          "id": 5,
          "title": "Вирази та рівняння",
          "tests": [
            {
              "id": 17,
              "title": "test1"
            },
            {
              "id": 18,
              "title": "test2"
            },
            {
              "id": 19,
              "title": "test3"
            },
            {
              "id": 20,
              "title": "test4"
            }
          ]
        }
      ]
    },
      {
        id: 1,
        grade: 7,
        sections: []
      },
      {
        id: 2,
        grade: 8,
        sections: []
      },
      {
        id: 3,
        grade: 9,
        sections: []
      },
      {
        id: 4,
        grade: 8,
        sections: []
      },
      {
        id: 5,
        grade: 9,
        sections: []
      }
  ]

export const tests = [
    {
      id: 1,
      course: 6,
      title: "test1",
      sectionTitle: "Подільність чисел",
      questions: [
        {
          id: 0,
          question: "Записати всі дільники числа 16:",
          answers: ["2,4,8", "1,2,4,8,16", "1,2,4,8"]
        },
        {
          id: 1,
          question: "Скільки дільників має число 42?",
          answers: ["6", "8", "7", "9"]
        },
        {
          id: 2,
          question: "Які з чисел: 2, 3, 4, 5, 6, 8, 10, 12, 20 є дільниками числа 20?",
          answers: ["2,3,4,5", "2,4,5,10,20", "2,4,5,8,10", "2,3,4,5,10,20"]
        },
        {
          id: 3,
          question: "Для чисел 8 і 10 кратним є число:",
          answers: ["80", "40", "24", "160"]
        },
        {
          id: 4,
          question: "Яке з чисел є простим?",
          answers: ["7", "15", "1", "38"]
        },
        {
          id: 5,
          question: "Запишіть найменше трицифрове число, яке кратне 3",
          answers: ["333", "666", "102", "111"]
        },
        {
          id: 6,
          question: "Яке з наступних чисел ділиться на 10",
          answers: ["34256", "4356", "38760", "76135"]
        },
        {
          id: 7,
          question: "Укажіть число, яке ділиться і на 9, і на 5",
          answers: ["78345", "16341", "2359", "1235"]
        },
        {
          id: 8,
          question: "НСД (240; 120) є число:",
          answers: ["60", "240", "120", "360"]
        },
        {
          id: 9,
          question: "НСК (24; 36) є число:",
          answers: ["72", "48", "12", "44"]
        },
      ]
    }
  ]

  export const students: IStudent[] = [
    {
      firstName: "Бобер",
      lastName: "Василь",
      email: "email",
      grade: 6,
      role: "teacher",
      progressSections: [
        {
          sectionId: 1,
          progress: 75
        },
        {
          sectionId: 2,
          progress: 80
        },
        {
          sectionId: 3,
          progress: 85
        },
        {
          sectionId: 4,
          progress: 90
        },
        {
          sectionId: 5,
          progress: 95
        }
      ],
      progressTests: [
        {
          testId: 1,
          progress: 65
        },
        {
          testId: 2,
          progress: 75
        },
        {
          testId: 3,
          progress: 85
        },
        {
          testId: 4,
          progress: 90
        }
      ]
    }
  ]

  export const teacher: ITeacher = {
    firstName: "Гайчук",
    lastName: "Лариса",
    email: "Email",
    grade: 11,
    role: "teacher",
    students: students
  }
  
  