export interface EmailFormData {
  formType: 'enroll' | 'contact';
  [key: string]: any;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendEmail(formData: EmailFormData): Promise<EmailResponse> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || `HTTP ${response.status}: Failed to send email`);
    }

    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Provide more specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your connection and try again.',
      };
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email. Please try again later.',
    };
  }
} 