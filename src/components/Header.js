import { Icon } from "@iconify/react";
import warningIcon from '@iconify/icons-mdi/alert-rhombus-outline';

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={warningIcon} />Alert Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header
