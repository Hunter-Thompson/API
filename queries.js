const Pool = require('pg').Pool
const pool = new Pool({
  user: 'hunter',
  host: 'database',
  database: 'api',
  password: 'helloworld',
  port: 5432,
  multipleSatements: true,  
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getAll = (request, response) => {
  pool.query('SELECT * FROM legalist.Attorney, legalist.Person', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    //response.send('working')
  })
}

const getAttorney = (request, response) => {
  pool.query('SELECT * FROM legalist.Attorney ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAttorneybyid = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM legalist.Attorney WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createAttorney = (request, response) => {
  const { firstname, lastname, barid, state  } = request.body

  pool.query('INSERT INTO legalist.Attorney (firstname, lastname, barid, state) VALUES ($1, $2, $3, $4)', [firstname, lastname, barid, state], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Attorney added with ID: ${results.insertId}`)
  })
}

const deleteAttorney = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('DELETE FROM legalist.Attorney WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Attorney deleted with ID: ${id}`)
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getPerson = (request, response) => {
  pool.query('SELECT * FROM legalist.Person ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPersonbyid = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM legalist.Person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createPerson = (request, response) => {
  const { firstname, lastname } = request.body

  pool.query('INSERT INTO legalist.Person (firstname, lastname) VALUES ($1, $2)', [firstname, lastname], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Person added with ID: ${results.insertId}`)
  })
}

const deletePerson = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('DELETE FROM legalist.Person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Person deleted with ID: ${id}`)
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getLCase = (request, response) => {
  pool.query('SELECT * FROM legalist.LCase ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getLCasebyid = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM legalist.LCase WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createLCase = (request, response) => {
  const { title, state } = request.body

  pool.query('INSERT INTO legalist.LCase (title, state) VALUES ($1, $2)', [title, state], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Case added with ID: ${results.insertId}`)
  })
}

const deleteCase = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('DELETE FROM legalist.LCase WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Case deleted with ID: ${id}`)
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




module.exports = {
  getAttorney,
  getAttorneybyid,
  createAttorney,
  getPerson,
  getPersonbyid,
  createPerson,
  getLCase,
  getLCasebyid,
  createLCase,
  deleteAttorney,
  deleteCase,
  deletePerson,
}
