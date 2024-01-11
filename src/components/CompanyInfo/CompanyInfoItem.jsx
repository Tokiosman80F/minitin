
const CompanyInfoItem = ({icon,text}) => {
    return (
        <div className="flex items-center gap-2 ${cursor}">
            <span className="text-lg">{icon}</span> <span className="text-sm">{text}</span>
        </div>
    );
};

export default CompanyInfoItem;