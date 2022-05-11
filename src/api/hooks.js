import { useQuery } from 'react-query'
import { apiGetData } from './fetchers'
import { useSnackbar } from '../SnackBar'

export function useGetData(
  params,
  queryConfig
) {
  const { onError } = useSnackbar()

  const query = useQuery(
    ['api-get-data', params],
    () => apiGetData(params),
    {
      onError,
      keepPreviousData: true,
      ...queryConfig,
    }
  )

  return query
}