export default function formatName(name) {
    if (name !== '') {
        return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    }
}