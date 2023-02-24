import { format, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)

  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy', {locale: tr})}</time>
  )
}