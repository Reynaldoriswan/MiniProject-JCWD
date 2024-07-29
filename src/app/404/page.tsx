import styles from "@/app/styles/404.module.scss";

const Custom404 = ()=> {
    return (
        <div className={styles.error}>
            <img src="/images/Not__Found.png" alt="404" className={styles.error} />
            <div>404 | Halaman tidak ditemukan</div>
        </div>
    );
};

export default Custom404;