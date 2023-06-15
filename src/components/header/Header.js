
import Search from './CitySearch/Search'
import Logo from './Logo'
import Control from './control/Control'

const Header = (props) => {
  return (
    <div className='flex gap-5 flex-wrap justify-between items-center mb-5'>
      <Logo />
      <Search value={props.searchValue} onSubmit={props.onSubmit} onChange={props.onChange} />
      <Control  
        lang={props.lang} 
        mode={props.mode}
        unit={props.unit}
        onSwitchTheme={props.onSwitchTheme} 
        onToggleLang={props.onToggleLang}
        onToggleUnit={props.onToggleUnit}
      />

    </div>
  )
}

export default Header
