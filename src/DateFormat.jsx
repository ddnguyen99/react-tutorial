const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'},
    ).format(date);
}

export default function DateFormat() {
    return(
        <h1> To Do List {formatDate(today)} </h1>
    );
}