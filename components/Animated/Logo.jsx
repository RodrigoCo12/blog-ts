import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
import useMightyMouse from 'react-hook-mighty-mouse'

import styles from './styles.module.scss'

const Logo = () => {
  const [tiredness, setTiredness] = useState(0)

  let {
    positionRelative: { angle: angleLeftEye, x: x, y: y },
  } = useMightyMouse(true, 'left-eye', { x: 45, y: 45 })

  const hiddenEye = x < 25 && x > -25 && y < 25 && y > -25

  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
  }

  return (
    <div className={styles.eyes_follow_tired}>
      <div className={styles.container}>
        <div className={styles.eyelid} />
        <div className={styles.eyes}>
          {hiddenEye ? (
            <div id="left-eye" className={styles.eye_stop}>
              <div className={styles.iris}>
                <div className={styles.pupil} />
                <div className={styles.pupil_shinny} />
              </div>
            </div>
          ) : (
            <div id="left-eye" className={styles.eye} style={styleLeftEye}>
              <div className={styles.iris}>
                <div className={styles.pupil} />
                <div className={styles.pupil_shinny} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

export default Logo
