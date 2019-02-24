const getStatus = (color, variable) => `<span style='color:${color};'><%=${variable}%></span>`;

const checkedStatus = getStatus.bind(null, 'green');

const uncheckedStatus = getStatus.bind(null, 'red');

const recTemplate = `
<div style='background-color: white; border-top: 1px solid grey; padding: 5px 10px 5px 10px;' rec-id="<%=rec.id%>" class="row" >
  <input type='checkbox' <%=rec.status ? "checked='checked'" : ""%> />
    - <% if(rec.status) { %>
        ${checkedStatus('rec.desc')}
      <% } else { %>
        ${uncheckedStatus('rec.desc')}
      <% } %>
  <button action='delete'>Delete</button>
</div>
`;

const rootTemplate = `
<% data.forEach(rec => { %>
  ${recTemplate}
<% }); %>
<input type='text' placeholder='Enter action item' field='addtext'/><Button action="add">Add</Button>
`;

const TodoContainer = Backbone.View.extend({
    
    template: _.template(rootTemplate),

    setProps: function(props) {
	this.props = props;
	this.render();
    },

    render: function() {
	this.$el.html(this.template({
	    data: this.props
	}));
    },

    
    events: {
	"click div.row": "onRowClick",
	"click button[action=add]": "onAdd"
    },

    onAdd: function() {
	ReduxStore.dispatch({
	    type: "TODO_ADD",
	    value: this.$('input[field=addtext]')[0].value
	});
    }, 
    
    onRowClick: function(event) {
	const recId = event.currentTarget.getAttribute('rec-id');
	const rec = this.props.find(rec => rec.id === recId);

	if (event.target.getAttribute('action') === 'delete') {
	    ReduxStore.dispatch({
		type: "TODO_DELETE",
		id: recId
	    });
	} else {
	    ReduxStore.dispatch({
		type: "TODO_MODIFY_STATUS",
		id: recId,
		value: !rec.status
	    });
	}
	
    }
    
});
 
export default TodoContainer;
