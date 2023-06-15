import { formattedDateNow } from "../../date";

const TableHeader = (props) => {
  const today = `${props.dayName} ${props.dayOfMonth} ${props.monthName}`

  return (
    <thead className="border-b-2 border-paragraph">
        <tr>
            <th colSpan={2} scope="col" className="px-6 py-4 flex gap-4 items-end">
                <p className={`text-6xl font-medium ${formattedDateNow === today ? 'text-primary' : 'text-dark-100 dark:text-light-200'}`}>{props.dayOfMonth}</p>
                <div className={`${formattedDateNow === today ? 'text-primary' : 'text-paragraph'} font-medium`}>
                    <p>{props.monthName},</p>
                    <p>
                      {formattedDateNow !== today && props.dayName}
                      {formattedDateNow === today && "Today"}
                    </p>
                </div>
            </th>
            <th scope="col" className="px-6 text-paragraph text-lg">Pressure</th>
            <th scope="col" className="px-6 text-paragraph text-lg">Humidity</th>
            <th scope="col" className="px-6 text-paragraph text-lg">Feels like</th>
        </tr>
    </thead>
  )
}

export default TableHeader
