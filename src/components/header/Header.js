import Search from "./CitySearch/Search";
import Logo from "./Logo";
import Control from "./control/Control";

const Header = (props) => {
  return (
    <div className="pb-8 border-b-2 border-light-300 dark:border-dark-300">
      <div className="flex gap-5 flex-wrap justify-between items-center container">
        <Logo />
        <Search
          value={props.searchValue}
          onSubmit={props.onSubmit}
          onChange={props.onChange}
        />
        <Control
          lang={props.lang}
          mode={props.mode}
          unit={props.unit}
          onSwitchTheme={props.onSwitchTheme}
          onToggleLang={props.onToggleLang}
          onToggleUnit={props.onToggleUnit}
        />
      </div>
    </div>
  );
};

export default Header;
