import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

export const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start()

  }, [])

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  )
}
