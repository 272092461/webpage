import { Button as AntdButton } from 'antd'
import styles from './index.less'


export const Button = (props: any = {}) => (<AntdButton {...props} className={styles.commonButton} />)