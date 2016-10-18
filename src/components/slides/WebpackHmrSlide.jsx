import React, { PropTypes } from 'react'

const WebpackHmrSlide = () => (
    <div>
      Тут в презентацию врывается webpack с его hot module replacement! <br />
      Работает это за счет того что render в React-е — чистая функция
      и её новую реализацию можно просто перезапустить со старыми данными <br />
      Write-Save-<i>hot module replacement</i>-<i>state stays untouched</i>-Check
    </div>
)

export default WebpackHmrSlide
