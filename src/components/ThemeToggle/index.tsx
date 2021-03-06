import React, {useState, useEffect} from 'react'
import './styles.scss'
import {ReactComponent as MoonIcon} from './assets/svg/moon.svg'
import {ReactComponent as SunIcon} from './assets/svg/sun.svg'

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches

const updateTheme = isDarkEnabled => {
  // Get CSS variables for background/foreground
  // eslint-disable-next-line no-undef
  // const styles = window.getComputedStyle(document.body)
  // const black = styles.getPropertyValue('--black')
  // const white = styles.getPropertyValue('--white')
  // // eslint-disable-next-line no-undef
  // const docEl = document.documentElement

  if (isDarkEnabled) {
    // docEl.style.setProperty('--background', black)
    // docEl.style.setProperty('--foreground', white)
    // eslint-disable-next-line no-undef
    document.querySelector('html').classList.add('dark')
  } else {
    // docEl.style.setProperty('--background', white)
    // docEl.style.setProperty('--foreground', black)
    // eslint-disable-next-line no-undef
    document.querySelector('html').classList.remove('dark')
  }
}

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(isDark)

  /*
   * Read the blog post here:
   * https://letsbuildui.dev/articles/building-a-dark-mode-theme-toggle
   */

  useEffect(() => {
    updateTheme(isEnabled)
  }, [isEnabled])

  const toggleState = () => {
    setIsEnabled(prevState => !prevState)
  }

  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
        <span className="hidden">{isEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}</span>
        <div className="icons">
          <MoonIcon />
          <SunIcon />
        </div>
        <input id="toggle" name="toggle" type="checkbox" checked={isEnabled} onClick={toggleState} />
      </div>
    </label>
  )
}
