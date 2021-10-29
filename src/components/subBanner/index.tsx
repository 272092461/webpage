import styles from './index.less';

export default (props: { title: React.ReactNode }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
};
