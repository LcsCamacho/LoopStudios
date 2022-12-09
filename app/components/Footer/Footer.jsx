import styles from './styles.module.scss'
import Image from 'next/image'


export default function Footer() {
    const options = [
        'About',
        'Careers',
        'Events',
        'Products',
        'Support',
    ]

    const logoPaths = [
        'facebook',
        'twitter',
        'pinterest',
        'instagram',
    ]

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footer1}>
                    <div>
                        <Image className={styles.logo}
                            src={require('../../public/images/logo.svg')}
                            width={250}
                            height={50} alt=" logo"/>
                    </div>
                    {logoPaths.map((item, i) => (
                        <Image className={styles.imgsFooter}
                        src={require(`../../public/images/icon-${item}.svg`)} key={i} 
                        width={40}
                        height={40} alt="icon"/>
                    ))
                    }
                    </div>
                    <div className={styles.footer2}>
                        {options.map((item, i) => (
                            <h3 className={styles.listFooter} key={i}>{item}</h3>
                        ))}

                        <span>2021 Loopstudios. All rights reserved</span>
                    </div>
                </div>
            </footer>
        </>
    )
}