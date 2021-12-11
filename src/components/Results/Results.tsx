import React from 'react';
import {
  Card,
  Paper,
} from '@mui/material';

interface ResultsProps {
  executionOutputString: string;
  loading: boolean;
}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const { executionOutputString, loading } = props;

  return (
    <div style={{ height: '100%' }}>
      <Card
        style={{
          height: '100%',
          overflowY: 'auto',
          overflowX: 'auto',
          borderRadius: 0
        }}>
          <React.Fragment>
            <Paper variant={'outlined'} sx={{ p: 2, minHeight: '100%', borderRadius: 0 }}>
              {executionOutputString && (
                <pre style={{ fontFamily: 'monospace', fontWeight: 400, fontSize: '1rem', lineHeight: '1.5' }}>
                  {executionOutputString}
                </pre>
              )}
            </Paper>
          </React.Fragment>
      </Card>
    </div>
  );
};

export default Results;
