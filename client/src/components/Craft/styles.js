import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    image: {
        maxWidth: '100%',
    },
    cards: {
        // Provide some spacing between cards
        margin: 1,
    
        // Use flex layout with column direction for components in the card
        // (CardContent and CardActions)
        display: "flex",
        flexDirection: "row",
    
        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between"
      }
});