import { useConfig } from '../ConfigProvider'
import caretDownImage from '/img/images/caret-downsvg.svg'

export type SorterProps = { sort?: boolean | 'asc' | 'desc' }

const Sorter = ({ sort }: SorterProps) => {
    const { themeColor, primaryColorLevel } = useConfig()

    const color = `text-${themeColor}-${primaryColorLevel}`

    const renderSort = () => {
        if (typeof sort === 'boolean') {
            return (
                <img 
                    src={caretDownImage} 
                    alt="sort" 
                
                />
            )
        }

        if (sort === 'asc') {
            return (
                <img 
                    src={caretDownImage} 
                    alt="sort ascending" 
                    className={`w-4 h-4 ${color} transform rotate-180`}
                />
            )
        }

        if (sort === 'desc') {
            return (
                <img 
                    src={caretDownImage} 
                    alt="sort descending" 
                    className={`w-4 h-4 ${color}`}
                />
            )
        }

        return null
    }

    return <div className="inline-flex">{renderSort()}</div>
}

export default Sorter
