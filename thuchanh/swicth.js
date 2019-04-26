let browser = prompt("please type your:",'')
switch (browser) {
    case 'edge':
        alert("you've got the edge!");
        break;
    case 'chcom':
    case 'firefox':
    case 'safari' :
    case 'opera':
        alert('kay we support these browsers too');
        break;
    default:
        alert('we hope that this page look ok!');
    
}