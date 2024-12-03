export interface IAppState {
  loading: Boolean;
  status: string;
  error: string | undefined;
  totalQuestion: number;
  requestedSurvey: number;
  currentSectionIndex: number;
  currentQuestionIndex: number;
  profileImg: string;
}