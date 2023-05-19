import LayoutComponent from "../layout";
import styles from "./index.module.less";

const Index: React.FC = () => {
	return (
		<div className={styles.container}>
			<LayoutComponent></LayoutComponent>
		</div>
	);
};

export default Index;
