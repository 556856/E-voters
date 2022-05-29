import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import Faqs from './Faqs'
import FaqContact from './FaqContact'

import '@styles/base/pages/page-faq.scss'

const Faq = () => {
  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState('')

  const getFAQData = query => {
    return axios.get('/faq/data', { params: { q: query } }).then(response => {
      setData(response.data)
    })
  }

  useEffect(() => {
    getFAQData(searchTerm)
  }, [])

  return (
    <Fragment>
      {data !== null ? <Faqs data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
      <FaqContact />
    </Fragment>
  )
}

export default Faq
