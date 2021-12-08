import config from '../../config.js';
console.log("🚀 ~ file: main.js ~ line 2 ~ config", config)

populateTable()

async function fetchStudents() {

  try {
    const response = await fetch(`${config.baseUrl}/api/students`)

    if (!response.ok) {
      console.log("error fetching students!")
      return []
    }

    const students = await response.json()
    return students

  } catch (error) {
    console.log("🚀 ~ file: main.js ~ line 9 ~ fetchStudents ~ error", error)

  }
}

async function populateTable() {
  try {

    const students = await fetchStudents()

    if (!students || !students.length) return

    const tableStr =/*html*/ `
    <thead>
    <th>Full name</th>
    <th colspan="4">Faculty</th>
    </thead>
        <tbody>
        ${students.map(student => {
      return /*html*/`
          <tr>
          <td>${student.fullname}</td>
          <td>${student.faculty}</td>
          <td>Exams &nbsp;(<a href="#">link</a>)</td>
          <td>Edit &nbsp;(<a href="#">link</a>)</td>
          <td>Delete &nbsp;(<a href="#">link</a>)</td>
          </tr>
          `
    })}
        </tbody>
        `
    const studentTableEl = document.querySelector('#student-table')
    studentTableEl.innerHTML = tableStr


  } catch (error) {
    console.log("🚀 ~ file: main.js ~ line 29 ~ populateTable ~ error", error)

  }
}




