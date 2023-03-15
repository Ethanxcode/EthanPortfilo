import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/Assets/images';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import MediaQuery from 'react-responsive';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
	return (
		<Header className={cx('wrapper-heading')}>
			<div className={cx('bg-image-personal', 'once-in', 'overlay')}>
				<img src={images.personal} alt="Personal Logo" />
			</div>
			<div
				className={cx('get-height', 'overlay', 'once-in', 'once-in-secondary')}
			>
				{/* <MediaQuery minWidth={768}> */}
				<div className={cx('hanger')}>
					<p>
						<span>Located </span>
						<span>in the </span>
						<span>Viet nam</span>
					</p>

					<div className={cx('digital-country')}>
						<div className={cx('overlay')}></div>
						<div
							className={cx('globe')}
							// style={{ transform: 'translate(-50%, -50%)' }}
						>
							<div clasname={cx('globe-wrap')}>
								<img src={images.Vietnam} alt="Vietnamese" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={cx('nav-bar')}>
				<div className={cx('credits-top')}>
					<div className={cx('btn', 'btn-link', 'btn-left-top')}>
						<a
							href="#"
							className={cx('btn-click', 'magnetic')}
							style={{ transform: 'rotate(0.001deg)' }}
						>
							<span className={cx('btn-text')}>
								<div className={cx('credit')}>
									<span>©</span>
								</div>
								<div className={cx('cbd')}>
									<span className={cx('code-by')}>Code By </span>
									<span className={cx('name')}>
										<span className={cx('name-span')}>Ethan</span>
										<span className={cx('last-name')}>Tran</span>
									</span>
								</div>
							</span>
						</a>
					</div>
				</div>

				<ul className={cx('links-wrap')}>
					<li className={cx('btn', 'btn-link')}>
						<a className={cx('btn-click', 'magnetic')} href="#">
							<span className={cx('btn-text')}>Work</span>
						</a>
					</li>
					<li className={cx('btn', 'btn-link')}>
						<a className={cx('btn-click', 'magnetic')} href="#">
							<span className={cx('btn-text')}>About</span>
						</a>
					</li>
					<li className={cx('btn', 'btn-link')}>
						<a className={cx('btn-click', 'magnetic')} href="#">
							<span className={cx('btn-text')}>Contact</span>
						</a>
					</li>
				</ul>
			</div>

			<div className={cx('container', 'once-in', 'once-in-secondary')}>
				<div className={cx('row')}>
					<div className={cx('flex-col')}>
						{/* <FontAwesomeIcon
							icon={faArrowDown}
							style={{ transform: 'rotate(-45deg)', fontSize: '1.8rem' }}
						/> */}
						<h4>
							<span>Freelance</span>
						</h4>
						"Intern Developer"
					</div>
				</div>
			</div>
		</Header>
	);
}

export default Header;
