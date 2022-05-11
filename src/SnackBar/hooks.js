import { useSnackbar as useNotistack } from 'notistack'

export function useSnackbar() {
  const { enqueueSnackbar } = useNotistack()

  const enqueue = (variant) => (message) =>
    enqueueSnackbar(message, { variant })

  const onError = (error) => {
    enqueue('error')(errorMessage(error))
  }

  const shackbars = {
    onError,
    showError: enqueue('error'),
    showSuccess: enqueue('success'),
    showWarning: enqueue('warning'),
    showInfo: enqueue('info'),
  }

  return shackbars
}

export function errorMessage(error) {
  if (typeof error === 'string') return error

  const response = error?.response?.data
  let message = response?.data || response?.message || error?.message || error

  if (typeof message !== 'string') message = JSON.stringify(message)

  return message
}