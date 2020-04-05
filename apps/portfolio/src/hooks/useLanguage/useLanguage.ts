import { useState } from 'react'

export const useLanguage = (): [boolean, (language: string) => void] => {
  const [isEnglish, setIsEnglish] = useState(true)

  const updateLanguage = (language: string) => {
    const isEnglish = language === 'english'

    setIsEnglish(isEnglish)
  }

  return [isEnglish, updateLanguage]
}
