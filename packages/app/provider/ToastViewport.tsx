import { ToastViewport as ToastViewportOg } from '@my/ui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ToastViewport = () => {
  const { top, right, left } = useSafeAreaInsets()
  return <ToastViewportOg top={top + 55} left={left} right={right} />
}
