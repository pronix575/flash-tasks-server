import { FC } from "react"
import { TitleWrapper } from "./Title.styled"
import { TitleProps } from "./Title.types"

export const Title: FC<TitleProps> = ({children}) => {
    return <TitleWrapper>{children}</TitleWrapper>
}