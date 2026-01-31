// Application State
window.appState = {
  isStarted: false,
  currentStep: 1, // 1: Industry, 2: Employee Count, 3: Tool Selection
  industry: null,
  employeeCount: 50,
  selectedTools: [],
  toolScrollTop: 0,
  showResults: false,
  showRingi: false,
  ringiType: 'story',
  companyName: '',
  personName: '',
  isGenerated: false,
  showPlanModal: false,
  modalTool: null
};

// Alias for backward compatibility
let state = window.appState;
