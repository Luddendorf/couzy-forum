import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd,
//   selectCount } from './counterSlice';
import { selectActiveSubMenuItem }  from '../topbar/topbarSlice';
import { Topbar } from '../topbar/Topbar';
import { Home } from '../home/Home';
import { Counter } from '../counter/Counter';
import styles from '../../scss/main.scss';


export function Main() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  // const incrementValue = Number(incrementAmount) || 0;
  const submenuItem = useSelector(selectActiveSubMenuItem);

  const renderMain = (chosenSubmenuItem) => {
    switch(chosenSubmenuItem) {
      case 'topbar-topics':
        return <Home />;
      case 'topbar-gallery':
      case 'topbar-users-online':
      case 'topbar-our-team':
      case 'topbar-all-meetings':
      case 'topbar-holidays':
      case 'topbar-search':
      case 'topbar-faq':
      case 'topbar-contact-us':  
      default:
        return <Home />;
    }
  }

  return (
    <div className="main__container">
      <Topbar />
      { renderMain(submenuItem) }
    </div>
  );
}



    // <div>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={(e) => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementByAmount(incrementValue))}
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(incrementValue))}
    //     >
    //       Add Async
    //     </button>
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementIfOdd(incrementValue))}
    //     >
    //       Add If Odd
    //     </button>
    //   </div>
    // </div>