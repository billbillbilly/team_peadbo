/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewsletterChange = /* GraphQL */ `
  subscription OnNewsletterChange {
    onNewsletterChange {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onNotesChange = /* GraphQL */ `
  subscription OnNotesChange {
    onNotesChange {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const onContentTemplateChange = /* GraphQL */ `
  subscription OnContentTemplateChange($peadboUserID: ID!) {
    onContentTemplateChange(peadboUserID: $peadboUserID) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onNotificationChange = /* GraphQL */ `
  subscription OnNotificationChange($peadboUserID: ID) {
    onNotificationChange(peadboUserID: $peadboUserID) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onBoardMemberChange = /* GraphQL */ `
  subscription OnBoardMemberChange($id: ID) {
    onBoardMemberChange(id: $id) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const onBoardInviteChange = /* GraphQL */ `
  subscription OnBoardInviteChange($id: ID) {
    onBoardInviteChange(id: $id) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onBoardDeclineChange = /* GraphQL */ `
  subscription OnBoardDeclineChange($id: ID) {
    onBoardDeclineChange(id: $id) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onArticleChange = /* GraphQL */ `
  subscription OnArticleChange($articleId: ID) {
    onArticleChange(articleId: $articleId) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onMessageByConversationId = /* GraphQL */ `
  subscription OnMessageByConversationId($conversationId: ID!) {
    onMessageByConversationId(conversationId: $conversationId) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onEventChange = /* GraphQL */ `
  subscription OnEventChange($eventId: ID) {
    onEventChange(eventId: $eventId) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const onEventGuestChange = /* GraphQL */ `
  subscription OnEventGuestChange($eventId: ID) {
    onEventGuestChange(eventId: $eventId) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const onDeleteMessageByConversationId = /* GraphQL */ `
  subscription OnDeleteMessageByConversationId($conversationId: ID!) {
    onDeleteMessageByConversationId(conversationId: $conversationId) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onConversationChange = /* GraphQL */ `
  subscription OnConversationChange($author: ID) {
    onConversationChange(author: $author) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onMessageChange = /* GraphQL */ `
  subscription OnMessageChange($author: ID) {
    onMessageChange(author: $author) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onTaskChange = /* GraphQL */ `
  subscription OnTaskChange($taskId: ID) {
    onTaskChange(taskId: $taskId) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const onUserChange = /* GraphQL */ `
  subscription OnUserChange($id: ID) {
    onUserChange(id: $id) {
      id
      birthdate
      timezone
      industry
      jobTitle
      jobType
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      image
      firstName
      lastName
      name
      email
      isOnline
      boardPreferences {
        meetingFrequency
        meetingDays
        contactPreferences
        contactCircumstance
        publicAknowledgement
        __typename
      }
      linkedIn
      stripeId
      firstLogin
      organizationCode
      organizationAdmin
      recommendBoardMembers
      recommendAsBoardMember
      billing {
        active
        status
        createdAt
        endedAt
        canceledAt
        cancelAt
        cancelAtPeriodEnd
        currentPeriodStart
        currentPeriodEnd
        daysUntilDue
        subscriptionId
        type
        interval
        cardIssuer
        cardLast4
        cardExpMonth
        cardExpYear
        customerId
        coupon
        __typename
      }
      joinedViaInvite
      ageRange
      isAdmin
      receivedPostSignupMessage
      newsletters {
        items {
          author
          text
          htmlString
          title
          recipients
          scheduled
          scheduledAt
          subject
          sgMessageId
          sgBatchId
          status
          version
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      boards {
        items {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      completedSmartMatchMenteesSurvey
      address {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      phoneCode
      phone
      affiliationCodes
      inviteTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contentTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      notifications {
        email
        inApp
        __typename
      }
      onboardingResponseId
      boardMemberResponseId
      volunteerResponseId
      selfReflectionResponseId
      organizerChecklist {
        createAccount
        completeOnboardingForm
        updateProfileInformation
        videoWhatIsAPeadbo
        videoExampleBoard
        videoChoosingYourPeadbo
        completeGoalAssessmentForm
        videoUsingThePlatform
        newsletterManagement
        __typename
      }
      volunteerChecklist {
        createAccount
        completeVolunteerRegistrationForm
        updateBoardPreferences
        videoWhatIsAPeadbo
        videoBoardMemberBestPractices
        __typename
      }
      organizerPostBoardChecklist {
        videoManagingYourBoard
        videoPreppingForFirstMeeting
        __typename
      }
      boardMemberOf {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      emailLists {
        items {
          id
          name
          description
          peadboUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      meetingPrepTipsSent
      meetingLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onPeadboUserEmailListChange = /* GraphQL */ `
  subscription OnPeadboUserEmailListChange {
    onPeadboUserEmailListChange {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onBoardChange = /* GraphQL */ `
  subscription OnBoardChange($id: ID) {
    onBoardChange(id: $id) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $author: String
  ) {
    onCreateConversation(filter: $filter, author: $author) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $author: String
  ) {
    onUpdateConversation(filter: $filter, author: $author) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $author: String
  ) {
    onDeleteConversation(filter: $filter, author: $author) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $author: String
  ) {
    onCreateMessage(filter: $filter, author: $author) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $author: String
  ) {
    onUpdateMessage(filter: $filter, author: $author) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $author: String
  ) {
    onDeleteMessage(filter: $filter, author: $author) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboUserEmailList = /* GraphQL */ `
  subscription OnCreatePeadboUserEmailList(
    $filter: ModelSubscriptionPeadboUserEmailListFilterInput
    $peadboUserID: String
  ) {
    onCreatePeadboUserEmailList(filter: $filter, peadboUserID: $peadboUserID) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboUserEmailList = /* GraphQL */ `
  subscription OnUpdatePeadboUserEmailList(
    $filter: ModelSubscriptionPeadboUserEmailListFilterInput
    $peadboUserID: String
  ) {
    onUpdatePeadboUserEmailList(filter: $filter, peadboUserID: $peadboUserID) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboUserEmailList = /* GraphQL */ `
  subscription OnDeletePeadboUserEmailList(
    $filter: ModelSubscriptionPeadboUserEmailListFilterInput
    $peadboUserID: String
  ) {
    onDeletePeadboUserEmailList(filter: $filter, peadboUserID: $peadboUserID) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboNewsletter = /* GraphQL */ `
  subscription OnCreatePeadboNewsletter(
    $filter: ModelSubscriptionPeadboNewsletterFilterInput
    $author: String
  ) {
    onCreatePeadboNewsletter(filter: $filter, author: $author) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboNewsletter = /* GraphQL */ `
  subscription OnUpdatePeadboNewsletter(
    $filter: ModelSubscriptionPeadboNewsletterFilterInput
    $author: String
  ) {
    onUpdatePeadboNewsletter(filter: $filter, author: $author) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboNewsletter = /* GraphQL */ `
  subscription OnDeletePeadboNewsletter(
    $filter: ModelSubscriptionPeadboNewsletterFilterInput
    $author: String
  ) {
    onDeletePeadboNewsletter(filter: $filter, author: $author) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboTask = /* GraphQL */ `
  subscription OnCreatePeadboTask(
    $filter: ModelSubscriptionPeadboTaskFilterInput
    $author: String
  ) {
    onCreatePeadboTask(filter: $filter, author: $author) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const onUpdatePeadboTask = /* GraphQL */ `
  subscription OnUpdatePeadboTask(
    $filter: ModelSubscriptionPeadboTaskFilterInput
    $author: String
  ) {
    onUpdatePeadboTask(filter: $filter, author: $author) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const onDeletePeadboTask = /* GraphQL */ `
  subscription OnDeletePeadboTask(
    $filter: ModelSubscriptionPeadboTaskFilterInput
    $author: String
  ) {
    onDeletePeadboTask(filter: $filter, author: $author) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const onCreateTaskComment = /* GraphQL */ `
  subscription OnCreateTaskComment(
    $filter: ModelSubscriptionTaskCommentFilterInput
    $author: String
  ) {
    onCreateTaskComment(filter: $filter, author: $author) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const onUpdateTaskComment = /* GraphQL */ `
  subscription OnUpdateTaskComment(
    $filter: ModelSubscriptionTaskCommentFilterInput
    $author: String
  ) {
    onUpdateTaskComment(filter: $filter, author: $author) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const onDeleteTaskComment = /* GraphQL */ `
  subscription OnDeleteTaskComment(
    $filter: ModelSubscriptionTaskCommentFilterInput
    $author: String
  ) {
    onDeleteTaskComment(filter: $filter, author: $author) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const onCreatePeadboBoardActivity = /* GraphQL */ `
  subscription OnCreatePeadboBoardActivity(
    $filter: ModelSubscriptionPeadboBoardActivityFilterInput
    $author: String
  ) {
    onCreatePeadboBoardActivity(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardActivity = /* GraphQL */ `
  subscription OnUpdatePeadboBoardActivity(
    $filter: ModelSubscriptionPeadboBoardActivityFilterInput
    $author: String
  ) {
    onUpdatePeadboBoardActivity(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardActivity = /* GraphQL */ `
  subscription OnDeletePeadboBoardActivity(
    $filter: ModelSubscriptionPeadboBoardActivityFilterInput
    $author: String
  ) {
    onDeletePeadboBoardActivity(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle(
    $filter: ModelSubscriptionArticleFilterInput
    $author: String
  ) {
    onCreateArticle(filter: $filter, author: $author) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle(
    $filter: ModelSubscriptionArticleFilterInput
    $author: String
  ) {
    onUpdateArticle(filter: $filter, author: $author) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle(
    $filter: ModelSubscriptionArticleFilterInput
    $author: String
  ) {
    onDeleteArticle(filter: $filter, author: $author) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboBoardInvite = /* GraphQL */ `
  subscription OnCreatePeadboBoardInvite(
    $filter: ModelSubscriptionPeadboBoardInviteFilterInput
    $author: String
  ) {
    onCreatePeadboBoardInvite(filter: $filter, author: $author) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardInvite = /* GraphQL */ `
  subscription OnUpdatePeadboBoardInvite(
    $filter: ModelSubscriptionPeadboBoardInviteFilterInput
    $author: String
  ) {
    onUpdatePeadboBoardInvite(filter: $filter, author: $author) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardInvite = /* GraphQL */ `
  subscription OnDeletePeadboBoardInvite(
    $filter: ModelSubscriptionPeadboBoardInviteFilterInput
    $author: String
  ) {
    onDeletePeadboBoardInvite(filter: $filter, author: $author) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboBoardMember = /* GraphQL */ `
  subscription OnCreatePeadboBoardMember(
    $filter: ModelSubscriptionPeadboBoardMemberFilterInput
    $peadboUserID: String
  ) {
    onCreatePeadboBoardMember(filter: $filter, peadboUserID: $peadboUserID) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const onUpdatePeadboBoardMember = /* GraphQL */ `
  subscription OnUpdatePeadboBoardMember(
    $filter: ModelSubscriptionPeadboBoardMemberFilterInput
    $peadboUserID: String
  ) {
    onUpdatePeadboBoardMember(filter: $filter, peadboUserID: $peadboUserID) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const onDeletePeadboBoardMember = /* GraphQL */ `
  subscription OnDeletePeadboBoardMember(
    $filter: ModelSubscriptionPeadboBoardMemberFilterInput
    $peadboUserID: String
  ) {
    onDeletePeadboBoardMember(filter: $filter, peadboUserID: $peadboUserID) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const onCreatePeadboBoardDecline = /* GraphQL */ `
  subscription OnCreatePeadboBoardDecline(
    $filter: ModelSubscriptionPeadboBoardDeclineFilterInput
  ) {
    onCreatePeadboBoardDecline(filter: $filter) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardDecline = /* GraphQL */ `
  subscription OnUpdatePeadboBoardDecline(
    $filter: ModelSubscriptionPeadboBoardDeclineFilterInput
  ) {
    onUpdatePeadboBoardDecline(filter: $filter) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardDecline = /* GraphQL */ `
  subscription OnDeletePeadboBoardDecline(
    $filter: ModelSubscriptionPeadboBoardDeclineFilterInput
  ) {
    onDeletePeadboBoardDecline(filter: $filter) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboBoardUnresponsive = /* GraphQL */ `
  subscription OnCreatePeadboBoardUnresponsive(
    $filter: ModelSubscriptionPeadboBoardUnresponsiveFilterInput
  ) {
    onCreatePeadboBoardUnresponsive(filter: $filter) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardUnresponsive = /* GraphQL */ `
  subscription OnUpdatePeadboBoardUnresponsive(
    $filter: ModelSubscriptionPeadboBoardUnresponsiveFilterInput
  ) {
    onUpdatePeadboBoardUnresponsive(filter: $filter) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardUnresponsive = /* GraphQL */ `
  subscription OnDeletePeadboBoardUnresponsive(
    $filter: ModelSubscriptionPeadboBoardUnresponsiveFilterInput
  ) {
    onDeletePeadboBoardUnresponsive(filter: $filter) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboBoard = /* GraphQL */ `
  subscription OnCreatePeadboBoard(
    $filter: ModelSubscriptionPeadboBoardFilterInput
    $author: String
  ) {
    onCreatePeadboBoard(filter: $filter, author: $author) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoard = /* GraphQL */ `
  subscription OnUpdatePeadboBoard(
    $filter: ModelSubscriptionPeadboBoardFilterInput
    $author: String
  ) {
    onUpdatePeadboBoard(filter: $filter, author: $author) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoard = /* GraphQL */ `
  subscription OnDeletePeadboBoard(
    $filter: ModelSubscriptionPeadboBoardFilterInput
    $author: String
  ) {
    onDeletePeadboBoard(filter: $filter, author: $author) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboUserContact = /* GraphQL */ `
  subscription OnCreatePeadboUserContact(
    $filter: ModelSubscriptionPeadboUserContactFilterInput
    $author: String
  ) {
    onCreatePeadboUserContact(filter: $filter, author: $author) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboUserContact = /* GraphQL */ `
  subscription OnUpdatePeadboUserContact(
    $filter: ModelSubscriptionPeadboUserContactFilterInput
    $author: String
  ) {
    onUpdatePeadboUserContact(filter: $filter, author: $author) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboUserContact = /* GraphQL */ `
  subscription OnDeletePeadboUserContact(
    $filter: ModelSubscriptionPeadboUserContactFilterInput
    $author: String
  ) {
    onDeletePeadboUserContact(filter: $filter, author: $author) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboUserContactList = /* GraphQL */ `
  subscription OnCreatePeadboUserContactList(
    $filter: ModelSubscriptionPeadboUserContactListFilterInput
    $author: String
  ) {
    onCreatePeadboUserContactList(filter: $filter, author: $author) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboUserContactList = /* GraphQL */ `
  subscription OnUpdatePeadboUserContactList(
    $filter: ModelSubscriptionPeadboUserContactListFilterInput
    $author: String
  ) {
    onUpdatePeadboUserContactList(filter: $filter, author: $author) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboUserContactList = /* GraphQL */ `
  subscription OnDeletePeadboUserContactList(
    $filter: ModelSubscriptionPeadboUserContactListFilterInput
    $author: String
  ) {
    onDeletePeadboUserContactList(filter: $filter, author: $author) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboEventRating = /* GraphQL */ `
  subscription OnCreatePeadboEventRating(
    $filter: ModelSubscriptionPeadboEventRatingFilterInput
    $author: String
  ) {
    onCreatePeadboEventRating(filter: $filter, author: $author) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const onUpdatePeadboEventRating = /* GraphQL */ `
  subscription OnUpdatePeadboEventRating(
    $filter: ModelSubscriptionPeadboEventRatingFilterInput
    $author: String
  ) {
    onUpdatePeadboEventRating(filter: $filter, author: $author) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const onDeletePeadboEventRating = /* GraphQL */ `
  subscription OnDeletePeadboEventRating(
    $filter: ModelSubscriptionPeadboEventRatingFilterInput
    $author: String
  ) {
    onDeletePeadboEventRating(filter: $filter, author: $author) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const onCreatePeadboEventGuest = /* GraphQL */ `
  subscription OnCreatePeadboEventGuest(
    $filter: ModelSubscriptionPeadboEventGuestFilterInput
    $author: String
  ) {
    onCreatePeadboEventGuest(filter: $filter, author: $author) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const onUpdatePeadboEventGuest = /* GraphQL */ `
  subscription OnUpdatePeadboEventGuest(
    $filter: ModelSubscriptionPeadboEventGuestFilterInput
    $author: String
  ) {
    onUpdatePeadboEventGuest(filter: $filter, author: $author) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const onDeletePeadboEventGuest = /* GraphQL */ `
  subscription OnDeletePeadboEventGuest(
    $filter: ModelSubscriptionPeadboEventGuestFilterInput
    $author: String
  ) {
    onDeletePeadboEventGuest(filter: $filter, author: $author) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const onCreatePeadboEventReview = /* GraphQL */ `
  subscription OnCreatePeadboEventReview(
    $filter: ModelSubscriptionPeadboEventReviewFilterInput
    $author: String
  ) {
    onCreatePeadboEventReview(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboEventReview = /* GraphQL */ `
  subscription OnUpdatePeadboEventReview(
    $filter: ModelSubscriptionPeadboEventReviewFilterInput
    $author: String
  ) {
    onUpdatePeadboEventReview(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboEventReview = /* GraphQL */ `
  subscription OnDeletePeadboEventReview(
    $filter: ModelSubscriptionPeadboEventReviewFilterInput
    $author: String
  ) {
    onDeletePeadboEventReview(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboEvent = /* GraphQL */ `
  subscription OnCreatePeadboEvent(
    $filter: ModelSubscriptionPeadboEventFilterInput
    $author: String
  ) {
    onCreatePeadboEvent(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const onUpdatePeadboEvent = /* GraphQL */ `
  subscription OnUpdatePeadboEvent(
    $filter: ModelSubscriptionPeadboEventFilterInput
    $author: String
  ) {
    onUpdatePeadboEvent(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const onDeletePeadboEvent = /* GraphQL */ `
  subscription OnDeletePeadboEvent(
    $filter: ModelSubscriptionPeadboEventFilterInput
    $author: String
  ) {
    onDeletePeadboEvent(filter: $filter, author: $author) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const onCreatePeadboBoardMessage = /* GraphQL */ `
  subscription OnCreatePeadboBoardMessage(
    $filter: ModelSubscriptionPeadboBoardMessageFilterInput
    $author: String
  ) {
    onCreatePeadboBoardMessage(filter: $filter, author: $author) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardMessage = /* GraphQL */ `
  subscription OnUpdatePeadboBoardMessage(
    $filter: ModelSubscriptionPeadboBoardMessageFilterInput
    $author: String
  ) {
    onUpdatePeadboBoardMessage(filter: $filter, author: $author) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardMessage = /* GraphQL */ `
  subscription OnDeletePeadboBoardMessage(
    $filter: ModelSubscriptionPeadboBoardMessageFilterInput
    $author: String
  ) {
    onDeletePeadboBoardMessage(filter: $filter, author: $author) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboNewsletterDelivery = /* GraphQL */ `
  subscription OnCreatePeadboNewsletterDelivery(
    $filter: ModelSubscriptionPeadboNewsletterDeliveryFilterInput
    $author: String
  ) {
    onCreatePeadboNewsletterDelivery(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const onUpdatePeadboNewsletterDelivery = /* GraphQL */ `
  subscription OnUpdatePeadboNewsletterDelivery(
    $filter: ModelSubscriptionPeadboNewsletterDeliveryFilterInput
    $author: String
  ) {
    onUpdatePeadboNewsletterDelivery(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const onDeletePeadboNewsletterDelivery = /* GraphQL */ `
  subscription OnDeletePeadboNewsletterDelivery(
    $filter: ModelSubscriptionPeadboNewsletterDeliveryFilterInput
    $author: String
  ) {
    onDeletePeadboNewsletterDelivery(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const onCreatePeadboNewsletterClick = /* GraphQL */ `
  subscription OnCreatePeadboNewsletterClick(
    $filter: ModelSubscriptionPeadboNewsletterClickFilterInput
    $author: String
  ) {
    onCreatePeadboNewsletterClick(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const onUpdatePeadboNewsletterClick = /* GraphQL */ `
  subscription OnUpdatePeadboNewsletterClick(
    $filter: ModelSubscriptionPeadboNewsletterClickFilterInput
    $author: String
  ) {
    onUpdatePeadboNewsletterClick(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const onDeletePeadboNewsletterClick = /* GraphQL */ `
  subscription OnDeletePeadboNewsletterClick(
    $filter: ModelSubscriptionPeadboNewsletterClickFilterInput
    $author: String
  ) {
    onDeletePeadboNewsletterClick(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const onCreatePeadboNewsletterOpen = /* GraphQL */ `
  subscription OnCreatePeadboNewsletterOpen(
    $filter: ModelSubscriptionPeadboNewsletterOpenFilterInput
    $author: String
  ) {
    onCreatePeadboNewsletterOpen(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const onUpdatePeadboNewsletterOpen = /* GraphQL */ `
  subscription OnUpdatePeadboNewsletterOpen(
    $filter: ModelSubscriptionPeadboNewsletterOpenFilterInput
    $author: String
  ) {
    onUpdatePeadboNewsletterOpen(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const onDeletePeadboNewsletterOpen = /* GraphQL */ `
  subscription OnDeletePeadboNewsletterOpen(
    $filter: ModelSubscriptionPeadboNewsletterOpenFilterInput
    $author: String
  ) {
    onDeletePeadboNewsletterOpen(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const onCreatePeadboNewsletterBounce = /* GraphQL */ `
  subscription OnCreatePeadboNewsletterBounce(
    $filter: ModelSubscriptionPeadboNewsletterBounceFilterInput
    $author: String
  ) {
    onCreatePeadboNewsletterBounce(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const onUpdatePeadboNewsletterBounce = /* GraphQL */ `
  subscription OnUpdatePeadboNewsletterBounce(
    $filter: ModelSubscriptionPeadboNewsletterBounceFilterInput
    $author: String
  ) {
    onUpdatePeadboNewsletterBounce(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const onDeletePeadboNewsletterBounce = /* GraphQL */ `
  subscription OnDeletePeadboNewsletterBounce(
    $filter: ModelSubscriptionPeadboNewsletterBounceFilterInput
    $author: String
  ) {
    onDeletePeadboNewsletterBounce(filter: $filter, author: $author) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const onCreatePeadboNotes = /* GraphQL */ `
  subscription OnCreatePeadboNotes(
    $filter: ModelSubscriptionPeadboNotesFilterInput
    $author: String
  ) {
    onCreatePeadboNotes(filter: $filter, author: $author) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const onUpdatePeadboNotes = /* GraphQL */ `
  subscription OnUpdatePeadboNotes(
    $filter: ModelSubscriptionPeadboNotesFilterInput
    $author: String
  ) {
    onUpdatePeadboNotes(filter: $filter, author: $author) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const onDeletePeadboNotes = /* GraphQL */ `
  subscription OnDeletePeadboNotes(
    $filter: ModelSubscriptionPeadboNotesFilterInput
    $author: String
  ) {
    onDeletePeadboNotes(filter: $filter, author: $author) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const onCreatePeadboNotification = /* GraphQL */ `
  subscription OnCreatePeadboNotification(
    $filter: ModelSubscriptionPeadboNotificationFilterInput
    $author: String
  ) {
    onCreatePeadboNotification(filter: $filter, author: $author) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboNotification = /* GraphQL */ `
  subscription OnUpdatePeadboNotification(
    $filter: ModelSubscriptionPeadboNotificationFilterInput
    $author: String
  ) {
    onUpdatePeadboNotification(filter: $filter, author: $author) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboNotification = /* GraphQL */ `
  subscription OnDeletePeadboNotification(
    $filter: ModelSubscriptionPeadboNotificationFilterInput
    $author: String
  ) {
    onDeletePeadboNotification(filter: $filter, author: $author) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboOrganization = /* GraphQL */ `
  subscription OnCreatePeadboOrganization(
    $filter: ModelSubscriptionPeadboOrganizationFilterInput
    $author: String
  ) {
    onCreatePeadboOrganization(filter: $filter, author: $author) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboOrganization = /* GraphQL */ `
  subscription OnUpdatePeadboOrganization(
    $filter: ModelSubscriptionPeadboOrganizationFilterInput
    $author: String
  ) {
    onUpdatePeadboOrganization(filter: $filter, author: $author) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboOrganization = /* GraphQL */ `
  subscription OnDeletePeadboOrganization(
    $filter: ModelSubscriptionPeadboOrganizationFilterInput
    $author: String
  ) {
    onDeletePeadboOrganization(filter: $filter, author: $author) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboBoardPostReadReceipt = /* GraphQL */ `
  subscription OnCreatePeadboBoardPostReadReceipt(
    $filter: ModelSubscriptionPeadboBoardPostReadReceiptFilterInput
    $author: String
  ) {
    onCreatePeadboBoardPostReadReceipt(filter: $filter, author: $author) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardPostReadReceipt = /* GraphQL */ `
  subscription OnUpdatePeadboBoardPostReadReceipt(
    $filter: ModelSubscriptionPeadboBoardPostReadReceiptFilterInput
    $author: String
  ) {
    onUpdatePeadboBoardPostReadReceipt(filter: $filter, author: $author) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardPostReadReceipt = /* GraphQL */ `
  subscription OnDeletePeadboBoardPostReadReceipt(
    $filter: ModelSubscriptionPeadboBoardPostReadReceiptFilterInput
    $author: String
  ) {
    onDeletePeadboBoardPostReadReceipt(filter: $filter, author: $author) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboBoardPost = /* GraphQL */ `
  subscription OnCreatePeadboBoardPost(
    $filter: ModelSubscriptionPeadboBoardPostFilterInput
  ) {
    onCreatePeadboBoardPost(filter: $filter) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboBoardPost = /* GraphQL */ `
  subscription OnUpdatePeadboBoardPost(
    $filter: ModelSubscriptionPeadboBoardPostFilterInput
  ) {
    onUpdatePeadboBoardPost(filter: $filter) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboBoardPost = /* GraphQL */ `
  subscription OnDeletePeadboBoardPost(
    $filter: ModelSubscriptionPeadboBoardPostFilterInput
  ) {
    onDeletePeadboBoardPost(filter: $filter) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboUserInviteTemplate = /* GraphQL */ `
  subscription OnCreatePeadboUserInviteTemplate(
    $filter: ModelSubscriptionPeadboUserInviteTemplateFilterInput
    $peadboUserID: String
  ) {
    onCreatePeadboUserInviteTemplate(
      filter: $filter
      peadboUserID: $peadboUserID
    ) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboUserInviteTemplate = /* GraphQL */ `
  subscription OnUpdatePeadboUserInviteTemplate(
    $filter: ModelSubscriptionPeadboUserInviteTemplateFilterInput
    $peadboUserID: String
  ) {
    onUpdatePeadboUserInviteTemplate(
      filter: $filter
      peadboUserID: $peadboUserID
    ) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboUserInviteTemplate = /* GraphQL */ `
  subscription OnDeletePeadboUserInviteTemplate(
    $filter: ModelSubscriptionPeadboUserInviteTemplateFilterInput
    $peadboUserID: String
  ) {
    onDeletePeadboUserInviteTemplate(
      filter: $filter
      peadboUserID: $peadboUserID
    ) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboUserContentTemplate = /* GraphQL */ `
  subscription OnCreatePeadboUserContentTemplate(
    $filter: ModelSubscriptionPeadboUserContentTemplateFilterInput
    $peadboUserID: String
  ) {
    onCreatePeadboUserContentTemplate(
      filter: $filter
      peadboUserID: $peadboUserID
    ) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeadboUserContentTemplate = /* GraphQL */ `
  subscription OnUpdatePeadboUserContentTemplate(
    $filter: ModelSubscriptionPeadboUserContentTemplateFilterInput
    $peadboUserID: String
  ) {
    onUpdatePeadboUserContentTemplate(
      filter: $filter
      peadboUserID: $peadboUserID
    ) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeadboUserContentTemplate = /* GraphQL */ `
  subscription OnDeletePeadboUserContentTemplate(
    $filter: ModelSubscriptionPeadboUserContentTemplateFilterInput
    $peadboUserID: String
  ) {
    onDeletePeadboUserContentTemplate(
      filter: $filter
      peadboUserID: $peadboUserID
    ) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeadboUserContactListAssociation = /* GraphQL */ `
  subscription OnCreatePeadboUserContactListAssociation(
    $filter: ModelSubscriptionPeadboUserContactListAssociationFilterInput
    $author: String
  ) {
    onCreatePeadboUserContactListAssociation(filter: $filter, author: $author) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
export const onUpdatePeadboUserContactListAssociation = /* GraphQL */ `
  subscription OnUpdatePeadboUserContactListAssociation(
    $filter: ModelSubscriptionPeadboUserContactListAssociationFilterInput
    $author: String
  ) {
    onUpdatePeadboUserContactListAssociation(filter: $filter, author: $author) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
export const onDeletePeadboUserContactListAssociation = /* GraphQL */ `
  subscription OnDeletePeadboUserContactListAssociation(
    $filter: ModelSubscriptionPeadboUserContactListAssociationFilterInput
    $author: String
  ) {
    onDeletePeadboUserContactListAssociation(filter: $filter, author: $author) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
