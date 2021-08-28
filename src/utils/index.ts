/**
 * 合并多个className
 * @param names 要合并的classNames
 * */
export const joinClass = (...names: (string | undefined)[]) => {
    return names.filter(Boolean).join(' ');
};
