import Select from 'react-select';
import styles from './index.module.scss'

const FilterItem = ({ label, data, isMulti = false, onChange }) => {
  return (
    <div className={styles.item}>
      <label className={styles.label} htmlFor="">{label}</label>
      <Select
        cacheOptions
        options={data}
        classNames={{
          control: () => styles.dropdown
        }}
        closeMenuOnSelect={!isMulti}
        isMulti={isMulti}
        onChange={(newValue) => onChange(newValue)}
      />
    </div>
  )
}

export default FilterItem