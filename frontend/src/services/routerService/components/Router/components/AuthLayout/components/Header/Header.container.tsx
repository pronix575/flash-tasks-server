import { useStore } from "effector-react";
import { FC } from "react"
import { authService } from "../../../../../../../authService";
import { userService } from "../../../../../../../userService";
import { Header } from "./Header"

export const HeaderContainer: FC = () => {
    const handleSubmitLogout = authService.inputs.signOutUser;
    const me = useStore(userService.outputs.$me);
  
    return <Header handleSubmit={handleSubmitLogout} me={me}/>
}