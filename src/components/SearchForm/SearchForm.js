import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchValue));
    }

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <TextInput 
            placeholder="Search..."
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)} />
            <Button>
                <span className='fa fa-search'></span>
            </Button>
        </form>
    );
  };

export default SearchForm;