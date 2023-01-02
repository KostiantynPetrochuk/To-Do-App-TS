Last changes:

-added eslint and prettier(fixed tabs, quotes etc.);

-changed "status" on "isDone" for TaskType;

-removed handlers from every tasks and added it for tasks parent container;

-used "createAction" and "createReducer" from @reduxjs/toolkit;

-removed handler "handleToggle" from checkboxes;

-added "useCallback" for handlers;

-moved component "Task" on new file and added React.memo for him;
