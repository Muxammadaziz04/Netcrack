import { Alert } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { alertActions } from "store/Alert"
import cls from "./Alerts.module.scss"

const Alerts = () => {
  const alerts = useSelector((state) => state.alert)
  const dispatch = useDispatch()

  return (
    <div className={cls.Alerts}>
      {alerts?.length > 0 && alerts.map((alert) => (
        <Alert 
            key={alert.id} 
            className={`${cls.aler} ${cls.shakeAnimation}`} 
            severity={alert.type}
            onClose={() => dispatch(alertActions.deleteAlert(alert.id))}
        >
          {alert.message}
        </Alert>
      ))}
    </div>
  )
}

export default Alerts