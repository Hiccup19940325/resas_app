import { CardContainer } from './prefectureCard.styles'
import CheckBox from '../checkBox/checkBox.components'
import { useCallback, useEffect, useMemo } from 'react'
import useResas from '../../hook/useResas'
import { Prefecture } from '../../lib/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Spinner from '../loadingSpinner/spinner.component'

const PrefectureCard: React.FC = () => {
    const { prefectures, isLoading } = useSelector((state: RootState) => state.resas)
    const { loadPopulation, removePopulation, loadPrefectures } = useResas()

    const checkHandler = useCallback(
        async (code: number, checked: boolean) => {
            console.log('run')
            checked ? await loadPopulation(code) : removePopulation(code)
        },
        [loadPopulation, removePopulation]
    )

    useEffect(() => {
        loadPrefectures()
    }, [loadPrefectures])

    const showCard = useMemo(() => {
        return (
            <>
                <CardContainer>
                    {prefectures.map((item: Prefecture, index) => (
                        <CheckBox
                            name={item.prefName}
                            code={item.prefCode}
                            checkHandler={checkHandler}
                            key={index}
                        />
                    ))}
                </CardContainer>
                {isLoading && <Spinner />}
            </>
        )
    }, [checkHandler, prefectures, isLoading])

    return <>{showCard}</>
}

export default PrefectureCard
